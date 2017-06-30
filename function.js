var proxys = document.getElementsByClassName("proxy");
var lists = "";
for (var i =0;i<proxys.length;i++){
    lists += proxys[i].innerHTML.split("</script>")[1] + "\n";
}
