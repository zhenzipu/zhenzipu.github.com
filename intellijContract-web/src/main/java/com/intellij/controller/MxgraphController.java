package com.intellij.controller;

import com.intellij.util.Utils;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.net.URLDecoder;

@RestController
@RequestMapping(value = "/mxgraphDemo")
public class MxgraphController {

    private static Logger logger = Logger.getLogger(MxgraphController.class);


    @RequestMapping(value = "/saveMxgraphXml")
    public void saveMxgraphXml(HttpServletRequest request, HttpServletResponse response) {

        long t0 = System.currentTimeMillis();
        String mime = request.getParameter("mime");
        String filename = request.getParameter("filename");
        byte[] data = null;

        // Data in data param is base64 encoded and deflated
        String enc = request.getParameter("data");
        String xml = null;
        try {
            xml = request.getParameter("xml");

            xml = URLDecoder.decode(xml, Utils.CHARSET_FOR_URL_ENCODING);
            if (xml != null) {
                data = xml.getBytes(Utils.CHARSET_FOR_URL_ENCODING);
            }

            String format = request.getParameter("format");

            if (format == null) {
                format = "xml";
            }
            mime = "application/xml";


            if (filename != null && filename.length() > 0
                    && !filename.toLowerCase().endsWith(".svg")
                    && !filename.toLowerCase().endsWith(".html")
                    && !filename.toLowerCase().endsWith(".png")
                    && !filename.toLowerCase().endsWith("." + format)) {
                filename += "." + format;
            }

            response.setStatus(HttpServletResponse.SC_OK);

            if (filename != null) {
                response.setContentType(mime);
                response.setHeader("Content-Disposition",
                        "attachment; filename=\"" + filename
                                + "\"; filename*=UTF-8''" + filename);
            } else if (mime.equals("image/svg+xml")) {
                response.setContentType("image/svg+xml");
            } else {
                // Required to avoid download of file
                response.setContentType("text/plain");
            }

            OutputStream out = response.getOutputStream();
            out.write(data);
            out.close();

        } catch (Exception e) {
            logger.error("Error parsing xml contents : " + xml
                    + System.getProperty("line.separator")
                    + "Original stack trace : " + e.getMessage());
        }


    }
}
