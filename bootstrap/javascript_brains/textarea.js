var toggled = false;

document.querySelector(".btn-edit").addEventListener("click",function(e){
    
    
    if(!toggled){
        toggled = true;
        
        document.querySelector(".btn-edit").textContent = "save";
        
        var mainDiv = document.querySelector(".blogText");
        
        var text = document.getElementById("blogBody");
        
        var textarea = document.createElement("textarea");
        
        textarea.classList.add("first");
        
        textarea.setAttribute("rows","10");
        
        textarea.appendChild(document.createTextNode(`${text.textContent}`));
        
        text.remove();
        
        mainDiv.appendChild(textarea);
        
        return;
    }
    
    if(toggled){
        toggled = false;
        
        document.querySelector(".btn-edit").textContent = "edit";
        
        var text_textarea = document.querySelector(".first");
        
        console.log(document.querySelector(".first").value);
        
        var paragraph = document.createElement("p");
        
        paragraph.setAttribute("id","blogBody");
        
        var mainDiv = document.querySelector(".blogText");
        
        paragraph.textContent = text_textarea.value;
        
        text_textarea.remove();
        
        mainDiv.appendChild(paragraph);
        
        return;
    }
    
})