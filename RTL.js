var rtl = function() {
	
	this.rightAlign = function(view) {	
		if (view) {
			if (view.toString() === '[object TiUITextField]' || view.toString() === '[object TiUILabel]') {
				view.textAlign = 'right';
			} 		
		}
	};
	
	this.rightAlignChildren = function(view) {	
		if (view) {
			for(var i=0,j=view.children.length; i<j; i++){
			  if (view.children[i].toString() === '[object TiUITextField]' || view.children[i].toString() === '[object TiUILabel]') {
			  	view.children[i].textAlign = 'right';
			  } else if (view.children[i].toString() === '[object TiUIView]') {
			  	if (view.children[i].children && view.children[i].children.length > 0) {
			  		if (view.children[i].children[0].toString() === '[object TiUITextField]' || view.children[i].children[0].toString() === '[object TiUILabel]') {
			  			view.children[i].children[0].textAlign = 'right';
			  		}
			  	}
			  }
			};			
		}
	};
	
	this.swapAlignment = function(view) {
		if (view.left) {
			view.right = view.left;
			view.left = null;
		} else if (view.right) {
			view.left = view.right;
			view.right = null;
		}
		view.textAlign = 'right';
	};

	this.swapAlignmentOfChildren = function(view) {
		for (var i = 0, j = view.children.length; i < j; i++) {
			if (view.children[i].left) {
				view.children[i].right = view.children[i].left;
				view.children[i].left = null;
				view.children[i].textAlign = 'right';
			} else if (view.children[i].right) {
				view.children[i].left = view.children[i].right;
				view.children[i].right = null;
				view.children[i].textAlign = 'right';
			}
			
		};
	}; 

};


module.exports = rtl;