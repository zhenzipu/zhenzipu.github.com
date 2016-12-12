window.onload = function () {
    var num = 0;
    var $li = $('.navbar-nav li');
    var $a = $('.navbar-nav li a');

    $li[num].className = 'cur';
    for(var i = 0; i < $li.length; i++){
        $li[i].idx = i;
        $li[i].onclick = function(){
            for(var j = 0; j < $li.length; j++){
                $li[j].className = '';
               
            }
            this.className = 'cur';
            console.log(this)
       }
    }
}