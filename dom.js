var items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor= 'yellow';
items[1].style.fontWeight ='bold';
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}