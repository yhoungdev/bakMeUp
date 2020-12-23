const tip=document.querySelector('.folderEx');
const folder=document.querySelector('.fa-folder')
const mark=document.querySelector('.fa-question-circle');
const question=document.querySelector('.question');

console.log(folder)
    //now set the tool tip 
folder.onmouseover= e => {
  
    tip.style.display=`block`
}
folder.onmouseout= e =>{
    tip.style.display=`none`
}

mark.onmouseover= e => {
    swal({
        title: "BACKMEUP",
        text: "is a simple pdf and txt file backupper !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("just take a toll through it !", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}

