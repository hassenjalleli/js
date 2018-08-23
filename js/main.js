function bold()
{
    if(document.getElementById("text").style.fontWeight=='bold')
    {
        document.getElementById("text").style.fontWeight='normal';
    }else{
        document.getElementById("text").style.fontWeight='bold' ; 
    }
}
function italic()
{
    if(document.getElementById("text").style.fontStyle=='italic')
    {
        document.getElementById("text").style.fontStyle='normal';
    }else{
        document.getElementById("text").style.fontStyle='italic' ; 
    }
}
function underlined()
{
    if(document.getElementById("text").style.textDecoration=='underline')
    {
        document.getElementById("text").style.textDecoration='none';
    }else{
        document.getElementById("text").style.textDecoration='underline' ; 
    }
}

    var sizee=document.getElementById("size");
    sizee.onchange=function(){
        var textbox=document.getElementById("text");
        textbox.style.fontSize=this.value+"px";
    }
    
    function font(){
    var type=document.getElementById("type").value;
    var textbox2=document.getElementById("text");
    textbox2.style.fontFamily=type;
    }
    function col(){
        var col=document.getElementById("col").value;
        var textbox3=document.getElementById("text");
        textbox3.style.color=col;

    }