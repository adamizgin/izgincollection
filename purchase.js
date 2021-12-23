<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<link rel="icon" href="https://i.ibb.co/q1c8z7t/IZGIN-Collection-1.png">
	<script src="https://kit.fontawesome.com/b48589663c.js" crossorigin="anonymous"></script>
	<script src="script.js" type="text/javascript"></script>
	<script src="purchase.js" type="text/javascript"></script>
	<link rel="stylesheet" href="style.css">
	<title>Purchase | IZGIN Collection</title>
	<style type="text/css">

		#header {
			padding-left: 72.5px;
			width: calc(100vw - 72.5px);
		}

		#home-button {
			width: 55px;
			height: 30px;
			background: #0002;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			border-radius: 0 2px 2px;
		}
		#home-button::before {
			content: '';
			position: absolute;
			width: 20px;
			height: 20px;
			background: #fff;
			top: -10px;
			left: -10px;
			transform: rotate(-45deg);
		}
		#home-button::after {
			content: '';
			position: absolute;
			width: 20px;
			height: 20px;
			background: #fff;
			bottom: -10px;
			left: -10px;
			transform: rotate(45deg);
		}

		#home-button i {
			color: #444;
			position: absolute;
			top: 50%;
			left: calc(50% + 2.5px);
			transform: translate(-50%, -50%);
			font-size: 16px;
		}

















		
		.purchase-wrapper {
			width: calc(100% - 30px);
			padding: 75px 15px;
			display: none;
		}

	</style>
</head>
<body>

	<div id="header" class="no-select">
		<div id="ham">
			<div id="home-button">
				<i class="fas fa-home"></i>
			</div>
		</div>
		<h2>Purchase</h2>
		<div class="kunosho">
			<h3>ܟܘܢܫܐ</h3>
			<div></div>
		</div>
	</div>

	<div class="purchase-wrapper" id="p-1">
		<div id='product-component-1640113407485'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7491165126905',
		        node: document.getElementById('product-component-1640113407485'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments for the seller"
		    },
		    "contents": {
		      "note": true
		    },
		    "popup": true
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-2">
		<div id='product-component-1640116521350'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7491294429433',
		        node: document.getElementById('product-component-1640116521350'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments for the seller"
		    },
		    "contents": {
		      "note": true
		    },
		    "popup": true
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-3">
		<div id='product-component-1640120614660'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7491526197497',
		        node: document.getElementById('product-component-1640120614660'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Write the Bible verse here + eventual comments"
		    },
		    "contents": {
		      "note": true
		    },
		    "popup": true
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-4">
		<div id='product-component-1640122420908'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7491574038777',
		        node: document.getElementById('product-component-1640122420908'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments to the seller"
		    },
		    "contents": {
		      "note": true
		    },
		    "popup": true
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-5">
		<div id='product-component-1640127251011'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7491598057721',
		        node: document.getElementById('product-component-1640127251011'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments to the seller"
		    },
		    "contents": {
		      "note": true
		    }
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-6">
		<div id='product-component-1640130540773'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7491601301753',
		        node: document.getElementById('product-component-1640130540773'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments to the seller"
		    },
		    "contents": {
		      "note": true
		    }
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-7">
		<div id='product-component-1640216122673'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7492189028601',
		        node: document.getElementById('product-component-1640216122673'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments to the seller"
		    },
		    "contents": {
		      "note": true
		    }
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-8">
		<div id='product-component-1640218042344'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7492190961913',
		        node: document.getElementById('product-component-1640218042344'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments to the seller"
		    },
		    "contents": {
		      "note": true
		    }
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-9">
		<div id='product-component-1640218106194'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7492192567545',
		        node: document.getElementById('product-component-1640218106194'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments to the seller"
		    },
		    "contents": {
		      "note": true
		    }
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>

	<div class="purchase-wrapper" id="p-10">
		<div id='product-component-1640218468549'></div>
		<script type="text/javascript">
		/*<![CDATA[*/
		(function () {
		  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
		  if (window.ShopifyBuy) {
		    if (window.ShopifyBuy.UI) {
		      ShopifyBuyInit();
		    } else {
		      loadScript();
		    }
		  } else {
		    loadScript();
		  }
		  function loadScript() {
		    var script = document.createElement('script');
		    script.async = true;
		    script.src = scriptURL;
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		    script.onload = ShopifyBuyInit;
		  }
		  function ShopifyBuyInit() {
		    var client = ShopifyBuy.buildClient({
		      domain: 'izgin-collection.myshopify.com',
		      storefrontAccessToken: '37d0d7ac13ab2c3ef1c233957a4b7c50',
		    });
		    ShopifyBuy.UI.onReady(client).then(function (ui) {
		      ui.createComponent('product', {
		        id: '7492195123449',
		        node: document.getElementById('product-component-1640218468549'),
		        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
		        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px"
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "price": {
		        "font-size": "18px"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "button": false,
		      "buttonWithQuantity": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      },
		      "title": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "bold",
		        "font-size": "26px",
		        "color": "#4c4c4c"
		      },
		      "price": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "18px",
		        "color": "#4c4c4c"
		      },
		      "compareAt": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      },
		      "unitPrice": {
		        "font-family": "Helvetica Neue, sans-serif",
		        "font-weight": "normal",
		        "font-size": "15.299999999999999px",
		        "color": "#4c4c4c"
		      }
		    },
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "option": {},
		  "cart": {
		    "styles": {
		      "button": {
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        "background-color": "#578bb6",
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "button": "Checkout",
		      "noteDescription": "Comments to the seller"
		    },
		    "contents": {
		      "note": true
		    }
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#578bb6",
		        ":hover": {
		          "background-color": "#4e7da4"
		        },
		        ":focus": {
		          "background-color": "#4e7da4"
		        }
		      }
		    }
		  }
		},
		      });
		    });
		  }
		})();
		/*]]>*/
		</script>
	</div>
	
</body>
</html>
