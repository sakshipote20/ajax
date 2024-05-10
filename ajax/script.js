
document.getElementById("loadFileButton").addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var fileContent = this.responseText;
            // var moreContent = document.getElementById("moreContent");
            var fileContentDiv = document.getElementById("fileContent");
            var button = document.getElementById("loadFileButton");

            // if (moreContent.style.display === "none") {
            //     // Show additional content
            //     moreContent.style.display = "block";
            //     button.innerText = "Show Less";
            // } else {
            //     // Hide additional content
            //     moreContent.style.display = "none";
               
            // }

            if (fileContentDiv.style.display === "none") {
                // Show file content
                fileContentDiv.style.display = "block";
                button.innerText = "Show Less";
            } else {
                // Hide file content
                
                fileContentDiv.style.display = "none";
            }

            // Set file content
            fileContentDiv.innerText = fileContent;
        }
    };
    xhttp.open("GET", "localfile.txt", true);
    xhttp.send();
});

