let tab;
let tabContent;

window.onload = function(){
	tabContent = document.getElementsByClassName('tabContent');
	tab = document.getElementsByClassName('tab');
	hideTabsContent(1);	
}

function hideTabsContent(a){
	for(let i = a; i < tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('redborder');		
	}	
}

document.getElementById('tabs').onclick = function(event){
	let target = event.target;
	if(target.className == 'tab'){
		for(let i = 0; i < tab.length; i++){
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabsContent(0);
		tab[b].classList.add('redborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

function show(state)
	{
		document.getElementById('window').style.display = state;	
		document.getElementById('gray').style.display = state; 		
	}
