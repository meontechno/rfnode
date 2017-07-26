var allowed_file_size = "10048576"; //allowed file size
var allowed_files = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg']; //allowed file types
var border_color = "#C2C2C2"; //initial input border color

$("#uploadform").submit(function(e){
    e.preventDefault(); //prevent default action 
    proceed = true; //set proceed flat to true
    
    //simple input validation
    $($(this).find("input[data-required=true]")).each(function(){
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag              
            }   
    }).on("input", function(){ //change border color to original
         $(this).css('border-color', border_color);
    });
    
    //check file size and type before upload, works in modern browsers
    if(window.File && window.FileReader && window.FileList && window.Blob){
        var total_files_size = 0;
        $(this.elements['files_sent[]'].files).each(function(i, ifile){
            if(ifile.value !== ""){ //continue only if file(s) are selected
                if(allowed_files.indexOf(ifile.type) === -1){ //check unsupported file
                    alert( ifile.name + " is unsupported file type!");
                    proceed = false;
                }
             total_files_size = total_files_size + ifile.size; //add file size to total size
            }
        }); 
       if(total_files_size > allowed_file_size){ 
            alert( "Make sure total file size is less than 1 MB!");
            proceed = false;
        }
    }
    
    //if everything's ok, continue with Ajax form submit
    if(proceed){ 
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = new FormData(this); //constructs key/value pairs representing fields and values
        
        $.ajax({ //ajax form submit
            url : post_url,
            type: request_method,
            data : form_data,
            dataType : "json",
            contentType: false,
            cache: false,
            processData:false
        }).done(function(res){ //fetch server "json" messages when done
            if(res.type == "error"){
                $(".services").html('<div class="error">'+ res.text +"</div>");
            }
            
            if(res.type == "done"){
                $(".services").html('<div class="success">'+ res.text +"</div>");
            }
        });
    }
});




































/*

$(document).ready(function(){
	$('#uploadfile').on('submit', function(){
		var cur_obj = $(this);
		cur_obj.preventDefault();
		var url = cur_obj.attr('action'),
		type = cur_obj.attr('method');
		

		$.ajax({
			url: url,
			type: type,
			data: new FormData(this),
			contentType: false,
			processData: false,
			success: function(data){
				$('.status').html("file uploaded");
				alert("file uploaded");
			}
		});
	});


});






$('#uploadfile').on('submit', function(){
	var cur_obj = $(this),
	url = cur_obj.attr('action'),
	type = cur_obj.attr('method'),
	data = {};

	cur_obj.find('[name]').each(function(index, value){
		var cur_obj = $(this),
			name = cur_obj.attr('name'),
			value = cur_obj.val();

		data[name] = value;

	});
	console.log(data);
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response){
			console.log(response);
		}
	});

	return false;
});

*/