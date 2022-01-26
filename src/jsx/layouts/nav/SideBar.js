/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
import plus from "../../../images/plus.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector('.heart');
    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }
    handleheartBlast.addEventListener('click', heartBlast);

  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
    "",
    "dashboard-dark",
    "order-list",
    "order-details",
    "customers",
    "analytics",
    "review",
    "task",
  ],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
    redux = [
      "redux-form",
      "redux-wizard",
      "todo",
    ],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`deznav ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? scrollPosition > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">

          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link to="/dashboard" className="ai-icon" >
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link to="/email-compose" className="ai-icon" >
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Features</span>
            </Link>
          </li>
          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link to="/chart-apexchart" className="ai-icon" >
              <i className="flaticon-041-graph"></i>
              <span className="nav-text">Collection Charts</span>
            </Link>
          </li>
          <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
            <Link to="/chart-sparkline" className="ai-icon" >
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Wallet Analysis</span>
            </Link>
          </li>
          <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
            <Link to="/redux-form" className="ai-icon" >
              <i className="flaticon-087-stop"></i>
              <span className="nav-text">Bulk Buy</span>
            </Link>
          </li>
          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="/widget-basic" className="ai-icon" >
              <i className="flaticon-013-checkmark"></i>
              <span className="nav-text">Rarity</span>
            </Link>
          </li>
          {/* <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-072-printer"></i>
              <span className="nav-text forms">Forms</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "form-element" ? "mm-active" : ""}`}
                  to="/form-element"
                >
                  Form Elements
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-wizard" ? "mm-active" : ""}`}
                  to="/form-wizard"
                >
                  Wizard
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-editor-summernote" ? "mm-active" : ""
                    }`}
                  to="/form-editor-summernote"
                >
                  Summernote
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-pickers" ? "mm-active" : ""}`}
                  to="/form-pickers"
                >
                  Pickers
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-validation-jquery" ? "mm-active" : ""
                    }`}
                  to="/form-validation-jquery"
                >
                  Form Validate
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" ><i className="flaticon-043-menu"></i><span className="nav-text">Table</span></Link>
            <ul>
              <li>
                <Link className={`${path === "table-filtering" ? "mm-active" : ""}`} to="/table-filtering">
                  Table Filtering
                </Link>
              </li>
              <li>
                <Link className={`${path === "table-sorting" ? "mm-active" : ""}`} to="/table-sorting">
                  Table Sorting
                </Link>
              </li>
              <li>
                <Link className={`${path === "table-bootstrap-basic" ? "mm-active" : ""}`} to="/table-bootstrap-basic">
                  Bootstrap
                </Link>
              </li>
              <li>
                <Link className={`${path === "table-datatable-basic" ? "mm-active" : ""}`} to="/table-datatable-basic">
                  Datatable
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-022-copy"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul >
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" >Error</Link>
                <ul>
                  <li><Link className={`${path === "page-error-400" ? "mm-active" : ""}`} to="/page-error-400">Error 400</Link></li>
                  <li><Link className={`${path === "page-error-403" ? "mm-active" : ""}`} to="/page-error-403">Error 403</Link></li>
                  <li><Link className={`${path === "page-error-404" ? "mm-active" : ""}`} to="/page-error-404">Error 404</Link></li>
                  <li><Link className={`${path === "page-error-500" ? "mm-active" : ""}`} to="/page-error-500">Error 500</Link></li>
                  <li><Link className={`${path === "page-error-503" ? "mm-active" : ""}`} to="/page-error-503">Error 503</Link></li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${path === "page-lock-screen" ? "mm-active" : ""
                    }`}
                  to="/page-lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </li> */}
        </MM>
        <div className="plus-box">
          <img src={plus} alt="" />
          <h5 className="fs-18 font-w700">Add Menus</h5>
          <p className="fs-14 font-w400">Manage your NFTs <br />and Collections<i className="fas fa-arrow-right ms-3"></i></p>
        </div>
        <div className="copyright">
          <p><strong>Barrel Admin</strong> © 2021 All Rights Reserved</p>
          <p className="fs-12">Made with <span className="heart"></span> by A&I</p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
