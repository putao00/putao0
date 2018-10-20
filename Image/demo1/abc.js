window.onload = function(){
    //获取元素
    var container = document.getElementById('container');
    var list = this.document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;//默认第一个小圆点亮

    //小圆点的点亮
    function showButton() {
        //遍历小圆点的个数，当触发onclick事件后，className为‘on’的变为‘’。
        for(var i = 0;i < buttons.length; i++){
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on'; //原始第一个小圆点点亮，onclick事件触发后，index+1
    }

    function animate (offset) {
        //获取从第一张图片开始发生的偏移量
        var newLift = parseInt(list.style.left) + offset; 
        list.style.left = newLift + 'px';
        if(newLift > -600){  
            //如果偏移量的位置大于-600的时候，图片跳转到第五张图片
            list.style.left = -3000 + 'px';
        }
        if(newLift < -3000){ 
            //如果偏移量的位置大于-3000的时候，图片跳转到第一张图片
            list.style.left = -600 + 'px';
        }
    }
    next.onclick = function () {
        //如果button的index为5的时候，再点击next按钮会返回 1；
        if(index == 5){
            index = 1;
        }else{
            index += 1;
        }
        showButton();
        animate(-600);
    }
    prev.onclick = function () {
        if(index == 1){
            index = 5;
        }else{
            index -= 1;
        }
        showButton();
        animate(600);
    }
}