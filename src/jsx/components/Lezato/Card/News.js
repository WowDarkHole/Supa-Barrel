import React, { Fragment } from "react";
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="card">
      <div className="card-header border-0 pb-0">
        <div className="justify-content-center">
          <h1 className="">News</h1>
          <span>This shows trading News</span>
        </div>
      </div>
      <div className="card-body">
        <PerfectScrollbar
          style={{ height: "600px" }}
          id="DZ_W_TimeLine1"
          className="widget-timeline dz-scroll style-1 height370 ps ps--active-y"
        >
          <ul className="timeline">
            <li>
              <div className="timeline-badge primary"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>10 minutes ago</span>
                <h6 className="mb-0">
                  Youtube, a video-sharing website, goes live{" "}
                  <strong className="text-primary">$500</strong>.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge info"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  New order placed{" "}
                  <strong className="text-info">#XF-2356.</strong>
                </h6>
                <p className="mb-0">
                  Quisque a consequat ante Sit amet magna at volutapt...
                </p>
              </Link>
            </li>
            <li>
              <div className="timeline-badge danger"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>30 minutes ago</span>
                <h6 className="mb-0">
                  john just buy your product{" "}
                  <strong className="text-warning">Sell $250</strong>
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge success"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>15 minutes ago</span>
                <h6 className="mb-0">
                  StumbleUpon is acquired by eBay.{" "}
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge warning"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
            <li>
              <div className="timeline-badge dark"></div>
              <Link
                className="timeline-panel text-muted"
                to="/widget-basic"
              >
                <span>20 minutes ago</span>
                <h6 className="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </Link>
            </li>
          </ul>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default News;
