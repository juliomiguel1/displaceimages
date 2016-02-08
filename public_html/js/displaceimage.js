$(document).ready(function(){

		var cantidadLi = $(".marco ul li").length;
		

					$(".marco ul li:nth-child(1) img").animate({"margin-top":"10%", "margin-left":"11%",opacity:0,},"fast");
					
					$(".marco ul li:nth-child(2) img").animate({"margin-top":"20%", "margin-left":"11%",opacity:0.30,"width":"60px","height":"60px",borderWidth: 2},"fast"); 
					
					$(".marco ul li:nth-child(3) img").animate({"margin-top":"80%", "margin-left":"1%",opacity:0.55,"width":"90px","height":"90px",borderWidth: 4},"fast"); 
					
					$(".marco ul li:nth-child(4) img").animate({"margin-top":"10%", "margin-left":"56%",opacity:1,"width":"300px","height":"250px", "z-index": "10"},"fast"); 
					
					$(".marco ul li:nth-child(5) img").animate({"margin-top":"80%", "margin-left":"216%",opacity:0.55,"width":"90px","height":"90px", "z-index": "5",borderWidth: 4},"fast");

					$(".marco ul li:nth-child(6) img").animate({"margin-top":"20%", "margin-left":"216%",opacity:0.30,"width":"60px","height":"60px",borderWidth: 2},"fast");

					setInterval(function() {
						
							$(".marco ul li:first").appendTo(".marco ul"); 
							$(".marco ul li:nth-child(1) img").animate({"margin-top":"10%", "margin-left":"11%",opacity:0,"width":"60px","height":"60px","z-index": "0"},1000);
					
							$(".marco ul li:nth-child(2) img").animate({"margin-top":"20%", "margin-left":"11%",opacity:0.30,"width":"60px","height":"60px", "z-index": "1",borderWidth: 2},1000); 
					
							$(".marco ul li:nth-child(3) img").animate({"margin-top":"80%", "margin-left":"1%",opacity:0.80,"width":"90px","height":"90px", "z-index": "5",borderWidth: 4},1000); 
					
							$(".marco ul li:nth-child(4) img").animate({"margin-top":"10%", "margin-left":"56%",opacity:1,"width":"300px","height":"250px", "z-index": "10",borderWidth: 7},1000); 
					
							$(".marco ul li:nth-child(5) img").animate({"margin-top":"80%", "margin-left":"216%",opacity:0.80,"width":"90px","height":"90px","z-index": "5",borderWidth: 4},2100);

							$(".marco ul li:nth-child(6) img").animate({"margin-top":"20%", "margin-left":"216%",opacity:0.30,"width":"60px","height":"60px","z-index": "1",borderWidth: 2},1700);
						
					},4000);
	});