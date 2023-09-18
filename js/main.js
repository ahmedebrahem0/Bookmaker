var SiteName=document.getElementById('siteName')
var SiteUrl=document.getElementById('siteUrl')
var Submit = document.getElementById("submit");
var containerinfo=[]
function submit() {
    var info={
        namesite:SiteName.value,
        urlsite:SiteUrl.value
    }
        containerinfo.push(info);
        addRow();
        clearInput();
}
function addRow(){
var cartona=``
    for(var i=0 ; i<containerinfo.length ; i++){
        cartona += `<div class="webwell row" id="MY">
        <h2>${containerinfo[i].namesite}</h2>
        <div>
        <a class="btn btn-primary mx-2" href="http://${containerinfo[i].urlsite}" target="_blank">visit</a>
        <button onclick="DeleteInfo(${i})" class="btn btn-danger btndelete">Delete</button>
        </div>
    </div>`;
    } 
document.getElementById('bookmarkList').innerHTML=cartona    
}
function DeleteInfo(Index){
    // alert(Index)
    containerinfo.splice(Index,1)
    addRow()
}
function clearInput(){
    SiteName.value="";
    SiteUrl.value="";
}
































