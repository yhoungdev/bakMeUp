//niow get the value of input 
const Action=()=>{
    //set everything in an object
    const { upload , btn , form, msg,sizeMsg }={
        upload:document.querySelector('#pdf'),
        btn:document.querySelector('#btn'),
        form:document.querySelector('#cloud'),
        msg:document.querySelector('#msg'),
        sizeMsg:document.querySelector('#sizeMsg')
    }
    
    //now prevent form default action
    form.addEventListener('submit', e => {
        e.preventDefault()
        data=new FormData()
        data.append('pdf','hey')
        
    })

    //now get the upload properties
    upload.addEventListener('change', e =>{
        //now get the name and size of choosen file 
        let name=e.target.files[0].name;
        let size=e.target.files[0].size;
        //now check for file type format with regex 
        let matchFor=new RegExp(/.\pdf/);
        let matchForTxt=new RegExp(/.\txt/);
            //test if file type is .pdf or txt only 
            if(name.match(matchFor) || name.match(matchForTxt)){
                    //dis[lay the file details]
                msg.textContent=`${name}`
                sizeMsg.textContent=`${size}`
                    //show the button when a pdf file is picked 
                const btn2=document.querySelector('.display');
                btn2.innerHTML=`  <input type="submit" value="upload to cloud" id="btn"/>`  
                    //noe set action for the button 
                btn2.onclick= e => {
                    console.log('button click ')
                }     
                
                
                //now send form data to cloud 
            } else{
                msg.textContent=`it must be a pdf or text fistyle="display:none;"le `;
                msg.style.color='red';  
                  
            }
    })

   
}
window.onload=()=>Action()