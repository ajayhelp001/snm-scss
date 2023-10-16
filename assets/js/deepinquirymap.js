// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById("cy"),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape
    .stylesheet()
    .selector("node")
    .css({
      height: 52.63,
      width: 52.63,
      "background-fit": "cover",
      "border-color": "#8B80FD",
      "border-width": 2,
      position: "relative",
    })
    .selector("node::before") /* Pseudo-element for the icon */
    .css({
      content:
        "attr(data-icon)" /* Display the icon value from the 'data-icon' attribute */,
      "font-family": "FontAwesome" /* Use FontAwesome for icons */,
      "font-size": "20px" /* Adjust the size of the icon */,
      color: "red" /* Set the color of the icon */,
      position: "absolute" /* Position the icon absolutely within the node */,
      top: "5px" /* Adjust the top position */,
      right: "5px" /* Adjust the right position */,
    })
    .selector(".eating")
    .css({
      "border-color": "red",
    })
    .selector(".eater")
    .css({
      "border-width": 9,
    })
    .selector("edge")
    .css({
      "curve-style": "bezier",
      width: 3.5,
      "target-arrow-shape": "",
      "line-color": "#BBBABD",
      "target-arrow-color": "#BBBABD",
      "line-style": "dashed",
    })
    .selector("#phanlemailan")
    .css({
      "background-image":
        "https://live.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg",
    })
    .selector("#twtnews")
    .css({
      "background-image":
        "https://live.staticflickr.com/1261/1413379559_412a540d29_b.jpg",
    })
    .selector("#memetipac")
    .css({
      "background-image":
        "https://live.staticflickr.com/3063/2751740612_af11fb090b_b.jpg",
    })
    .selector("#trader")
    .css({
      "background-image":
        "https://live.staticflickr.com/8316/8003798443_32d01257c8_b.jpg",
    })
    .selector("#nguyennhuhang")
    .css({
      "background-image":
        "https://live.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg",
    })
    .selector("#traderlollipop")
    .css({
      "background-image":
        "https://live.staticflickr.com/6098/6224655456_f4c3c98589_b.jpg",
    })
    .selector("#nanapham")
    .css({
      "background-image":
        "https://live.staticflickr.com/3866/14420309584_78bf471658_b.jpg",
    })
    .selector("#kokohalinh")
    .css({
      "background-image":
        "https://live.staticflickr.com/2660/3715569167_7e978e8319_b.jpg",
    })
    .selector("#cotsonggenz")
    .css({
      "background-image":
        "https://live.staticflickr.com/2660/3715569167_7e978e8319_b.jpg",
    })

    .selector("node[label]")
    .css({
      label: "data(label)",
    })
    .selector("edge[label]")
    .css({
      label: "data(label)",
      width: 3,
    })
    .selector(".background")
    .css({
      "text-background-opacity": 1,
      color: "#292C32",
      "font-family": "Be Vietnam Pro, sans-serif",
      "text-transform": "lowercase",
      "text-background-color": "#EBEBF6",
      "text-background-shape": "roundrectangle",
      "text-border-color": "#000",
      "text-border-width": 0,
      "font-weight": 500,
      "text-border-opacity": 1,
      "font-size": "12px",
    })
    .selector(".bottom-center")
    .css({
      "text-valign": "bottom",
      "text-halign": "center",
    })
    .selector("node[type]")
    .css({
      label: "data(type)",
    })
    .selector(".edge")
    .css({
      width: 1,
      "curve-style": "straight",
    })
    .selector(".edge[arrow]")
    .css({
      "target-arrow-shape": "none",
    })
    .selector('edge[arrow="none"]') // Select edges with arrow="none"
    .css({
      "target-arrow-shape": "none", // Remove the arrow shape for these edges
    }),

  elements: {
    nodes: [
      {
        data: {
          id: "twtnews",
          label: "TWT News",
          popper: '<i class="fas fa-heart"></i>',
        },
        classes: "background bottom-center",
      },
      {
        data: { id: "phanlemailan", label: "Phan Lê Mai Lan" },
        classes: "background bottom-center",
      },
      {
        data: { id: "memetipac", label: "Meme tươi đến từ rừng Pác Bó" },
        classes: "background bottom-center",
      },
      {
        data: { id: "trader", label: "Trader" },
        classes: "background bottom-center",
      },
      {
        data: { id: "nguyennhuhang", label: "Nguyễn Như Hằng" },
        classes: "background bottom-center",
      },
      {
        data: { id: "traderlollipop", label: "Trader Lollipop" },
        classes: "background bottom-center",
      },
      {
        data: { id: "nanapham", label: "Nana Phạm" },
        classes: "background bottom-center",
      },
      {
        data: { id: "kokohalinh", label: "Koko Hạ Linh" },
        classes: "background bottom-center",
      },
      {
        data: { id: "cotsonggenz", label: "Cột Sống GenZ" },
        classes: "background bottom-center",
      },
    ],
    edges: [
      { data: { id: "e12", source: "twtnews", target: "nguyennhuhang" } },
      {
        data: {
          id: "e1",
          source: "twtnews",
          target: "phanlemailan",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e2",
          source: "memetipac",
          target: "phanlemailan",
          arrow: "none",
        },
      },
      {
        data: {
          id: "e3",
          source: "trader",
          target: "phanlemailan",
          arrow: "none",
        },
      },
      {
        data: {
          id: "e4",
          source: "phanlemailan",
          target: "nguyennhuhang",
          arrow: "none",
        },
      },
      {
        data: {
          id: "e5",
          source: "nanapham",
          target: "phanlemailan",
          arrow: "none",
        },
      },
      {
        data: {
          id: "e6",
          source: "traderlollipop",
          target: "phanlemailan",
          arrow: "none",
        },
      },
      {
        data: {
          id: "e7",
          source: "cotsonggenz",
          target: "phanlemailan",
          arrow: "none",
        },
      },
      {
        data: {
          id: "e8",
          source: "nanapham",
          target: "traderlollipop",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e9",
          source: "nanapham",
          target: "nguyennhuhang",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e10",
          source: "traderlollipop",
          target: "nguyennhuhang",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e11",
          source: "nanapham",
          target: "cotsonggenz",
          arrow: "none",
          type: "none",
        },
      },

      {
        data: {
          id: "e13",
          source: "memetipac",
          target: "nguyennhuhang",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e14",
          source: "trader",
          target: "nguyennhuhang",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e15",
          source: "cotsonggenz",
          target: "nguyennhuhang",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e16",
          source: "kokohalinh",
          target: "nguyennhuhang",
          arrow: "none",
          type: "none",
        },
      },
      {
        data: {
          id: "e17",
          source: "kokohalinh",
          target: "phanlemailan",
          arrow: "none",
          type: "none",
        },
      },
    ],
  },

  layout: {
    name: "preset",
    positions: {
      twtnews: { x: 500, y: -200 },
      phanlemailan: { x: 0, y: 100 },
      memetipac: { x: 500, y: -100 },
      trader: { x: 500, y: 0 },
      nguyennhuhang: { x: 1000, y: 100 },
      traderlollipop: { x: 300, y: 220 },
      nanapham: { x: 500, y: 220 },
      kokohalinh: { x: 700, y: 220 },
      cotsonggenz: { x: 500, y: 400 },
      // Define positions for other nodes as needed
    },
    directed: true,
    padding: 10,
  },
  popper: {
    enabled: true, // Enable the popper extension
    // ... Other popper configuration options ...
  },
}); // cy init
var edges = cy.elements(".edge");

// Apply a style to the selected edges
edges.style({
  "line-color": "blue",
  "target-arrow-color": "blue",
  "target-arrow-shape": "none",
});

cy.edges().on("click", function (event) {
  var edge = event.target;

  if (edge.data("originalColor")) {
    // If the originalColor data exists, revert the color back
    edge.style({
      "line-color": edge.data("originalColor"),
      "target-arrow-color": edge.data("originalColor"),
    });

    // Remove the originalColor data to reset the toggle
    edge.removeData("originalColor");
  } else {
    // Store the original color in a data attribute
    edge.data("originalColor", edge.style("line-color"));

    // Change the color of the clicked edge
    // edge.style({
    //   "line-color": "green", 
    //   "target-arrow-color": "green", 
    // });
  }

  // Prevent the event from propagating further
  event.stopPropagation();
});

cy.nodes().on("click", function (event) {
  var node = event.target;

  // Get the connected edges of the clicked node
  var connectedEdges = node.connectedEdges();

  connectedEdges.forEach(function (edge) {
    if (edge.data("originalColor")) {
      // If the originalColor data exists, revert the color back
      edge.style({
        "line-color": edge.data("originalColor"),
        "target-arrow-color": edge.data("originalColor"),
      });

      // Remove the originalColor data to reset the toggle
      edge.removeData("originalColor");
    } else {
      // Store the original color in a data attribute
      edge.data("originalColor", edge.style("line-color"));

      // Change the color of the connected edge
      edge.style({
        "line-color": "#00D1FF", // Change to your desired color
        "target-arrow-color": "#00D1FF", // Change to your desired color
      });
    }
  });

  // Prevent the event from propagating further
  event.stopPropagation();
});

var e1 = cy.getElementById("e1");
var e2 = cy.getElementById("e2");
var e3 = cy.getElementById("e3");
var e4 = cy.getElementById("e4");
var e5 = cy.getElementById("e5");
var e6 = cy.getElementById("e6");
var e7 = cy.getElementById("e7");
var e8 = cy.getElementById("e8");
var e9 = cy.getElementById("e9");
var e10 = cy.getElementById("e10");
var e11 = cy.getElementById("e11");
var e12 = cy.getElementById("e12");
var e13 = cy.getElementById("e13");
var e14 = cy.getElementById("e14");
var e15 = cy.getElementById("e15");
var e16 = cy.getElementById("e16");
var e17 = cy.getElementById("e17");
var twtnews = cy.getElementById("twtnews");
var phanlemailan = cy.getElementById("phanlemailan");
var memetipac = cy.getElementById("memetipac");
var trader = cy.getElementById("trader");
var nguyennhuhang = cy.getElementById("nguyennhuhang");
var traderlollipop = cy.getElementById("traderlollipop");
var nanapham = cy.getElementById("nanapham");
var kokohalinh = cy.getElementById("kokohalinh");
var cotsonggenz = cy.getElementById("cotsonggenz");

var makeDiv = function (text) {
  var div = document.createElement("div");

  div.classList.add("popper-div");

  div.innerHTML = text;

  document.body.appendChild(div);

  return div;
};

// Nodes icon js start
var poppertwtnews = twtnews.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatetwtnews = function () {
  poppertwtnews.update();
};
twtnews.on("position", updatetwtnews);
twtnews.nodes().on("position", updatetwtnews);
cy.on("pan zoom resize", updatetwtnews);

var popperphanlemailan = phanlemailan.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatephanlemailan = function () {
  popperphanlemailan.update();
};
phanlemailan.on("position", updatephanlemailan);
phanlemailan.nodes().on("position", updatephanlemailan);
cy.on("pan zoom resize", updatephanlemailan);

var poppermemetipac = memetipac.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatememetipac = function () {
  poppermemetipac.update();
};
memetipac.on("position", updatememetipac);
memetipac.nodes().on("position", updatememetipac);
cy.on("pan zoom resize", updatememetipac);

var poppertrader = trader.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatetrader = function () {
  poppertrader.update();
};
trader.on("position", updatetrader);
trader.nodes().on("position", updatetrader);
cy.on("pan zoom resize", updatetrader);

var poppernanapham = nanapham.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatenanapham = function () {
  poppernanapham.update();
};
nanapham.on("position", updatenanapham);
nanapham.nodes().on("position", updatenanapham);
cy.on("pan zoom resize", updatenanapham);

var poppertraderlollipop = traderlollipop.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatetraderlollipop = function () {
  poppertraderlollipop.update();
};
traderlollipop.on("position", updatetraderlollipop);
traderlollipop.nodes().on("position", updatetraderlollipop);
cy.on("pan zoom resize", updatetraderlollipop);

var poppernguyennhuhang = nguyennhuhang.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatenguyennhuhang = function () {
  poppernguyennhuhang.update();
};
nguyennhuhang.on("position", updatenguyennhuhang);
nguyennhuhang.nodes().on("position", updatenguyennhuhang);
cy.on("pan zoom resize", updatenguyennhuhang);

var popperkokohalinh = kokohalinh.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatekokohalinh = function () {
  popperkokohalinh.update();
};
kokohalinh.on("position", updatekokohalinh);
kokohalinh.nodes().on("position", updatekokohalinh);
cy.on("pan zoom resize", updatekokohalinh);

var poppercotsonggenz = cotsonggenz.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updatecotsonggenz = function () {
  poppercotsonggenz.update();
};
cotsonggenz.on("position", updatecotsonggenz);
cotsonggenz.nodes().on("position", updatecotsonggenz);
cy.on("pan zoom resize", updatecotsonggenz);

// Nodes icon js end

// Edges icon js start
// E1
var popperE1 = e1.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE1 = function () {
  popperE1.update();
};
e1.on("position", updateE1);
e1.connectedNodes().on("position", updateE1);
cy.on("pan zoom resize", updateE1);

var popperE2 = e2.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE2 = function () {
  popperE2.update();
};
e2.on("position", updateE2);
e2.connectedNodes().on("position", updateE2);
cy.on("pan zoom resize", updateE2);

var popperE3 = e3.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE3 = function () {
  popperE3.update();
};
e3.on("position", updateE3);
e3.connectedNodes().on("position", updateE3);
cy.on("pan zoom resize", updateE3);

var popperE4 = e4.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i><div class="icons-wrap-container"><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><span class="numerice-icon-number">3</span></div>'
    );
  },
});
var updateE4 = function () {
  popperE4.update();
};
e4.on("position", updateE4);
e4.connectedNodes().on("position", updateE4);
cy.on("pan zoom resize", updateE4);

var popperE5 = e5.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i><div class="icons-wrap-container"><span class="numerice-icon-number">1</span><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><i class="fa-regular fa-comment-dots"></i></div>'
    );
  },
});
var updateE5 = function () {
  popperE5.update();
};
e5.on("position", updateE5);
e5.connectedNodes().on("position", updateE5);
cy.on("pan zoom resize", updateE5);

var popperE7 = e7.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i><div class="icons-wrap-container"><span class="numerice-icon-number">1</span><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><i class="fa-regular fa-comment-dots"></i></div>'
    );
  },
});
var updateE7 = function () {
  popperE7.update();
};
e7.on("position", updateE7);
e7.connectedNodes().on("position", updateE7);
cy.on("pan zoom resize", updateE7);

var popperE8 = e8.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE8 = function () {
  popperE8.update();
};
e8.on("position", updateE8);
e8.connectedNodes().on("position", updateE8);
cy.on("pan zoom resize", updateE8);

var popperE9 = e9.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE9 = function () {
  popperE9.update();
};
e9.on("position", updateE9);
e9.connectedNodes().on("position", updateE9);
cy.on("pan zoom resize", updateE9);

var popperE10 = e10.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE10 = function () {
  popperE10.update();
};
e10.on("position", updateE10);
e10.connectedNodes().on("position", updateE10);
cy.on("pan zoom resize", updateE10);

var popperE11 = e11.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE11 = function () {
  popperE11.update();
};
e11.on("position", updateE11);
e11.connectedNodes().on("position", updateE11);
cy.on("pan zoom resize", updateE11);

// E12
var popperE12 = e12.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE12 = function () {
  popperE12.update();
};
e12.on("position", updateE12);
e12.connectedNodes().on("position", updateE12);
cy.on("pan zoom resize", updateE12);

// E13
var popperE13 = e13.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE13 = function () {
  popperE13.update();
};
e13.on("position", updateE13);
e13.connectedNodes().on("position", updateE13);
cy.on("pan zoom resize", updateE13);

// E14
var popperE14 = e14.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE14 = function () {
  popperE14.update();
};
e14.on("position", updateE14);
e14.connectedNodes().on("position", updateE14);
cy.on("pan zoom resize", updateE14);

var popperE15 = e15.popper({
  content: function () {
    return makeDiv(
      '<div class="icons-wrap-container"><span class="numerice-icon-number">2</span><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><i class="fa-solid fa-share"></i></div><i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE15 = function () {
  popperE15.update();
};
e15.on("position", updateE15);
e15.connectedNodes().on("position", updateE15);
cy.on("pan zoom resize", updateE15);

var popperE17 = e17.popper({
  content: function () {
    return makeDiv(
      '<i class="fa-solid fa-user" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>'
    );
  },
});
var updateE17 = function () {
  popperE17.update();
};
e17.on("position", updateE17);
e17.connectedNodes().on("position", updateE17);
cy.on("pan zoom resize", updateE17);

// Edges icon js end

// Add edge images to the middle of edges
