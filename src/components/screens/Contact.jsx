import React from 'react';

export default function Contact() {
    return (
        <div className="bax">
            <div className="box1">
                <h3 className="datee">18/03/24</h3>
                <h3 className="requestt">Request ID : #9840291</h3>
                <h4 className="h44">Filed a request of 20</h4>
                <h4 className="h4444">30 Donors Accepted. 
                    <img style={{ position: 'relative', top: '2px' }} src="up arrow.png" alt="icon" width="20" height="20"/>
                </h4>
                <div className="inbax">
                    <h4 className="h444">donors.</h4>
                    <a href="#" className="arrow">
                        <h4 style={{ position: 'relative', left: '180px' }} className="h24">
                            See Details 
                            <img style={{ marginLeft: '10px' }} src="up-arrow-svgrepo-com.png" alt="icon" width="12" height="12" />
                        </h4>
                    </a>
                    <span className="patient">
                        <h5>Sl No.</h5>
                        <h3>Full name</h3>
                        <h4 className="ph">Phone No. <div className="indication"></div></h4>
                        <div className="report"><a href="" className="bloodv2">Blood Group</a></div>
                    </span>
                    <span className="patient">
                        <h5>1</h5>
                        <h3 className="adil">Adil Aathif</h3>
                        <h4 className="n-1">984039204923<div className="indication"></div></h4>
                        <div className="report"><a href="" className="bloodv2">AB+<img src="img/icon.png" alt="" /></a></div>
                    </span>
                    <span className="patient">
                        <h5>2</h5>
                        <h3 className="jeevan">Jeevan S K</h3>
                        <h4 className="n-2">984039204923 <div className="indication"></div></h4>
                        <div className="report"><a href="" className="bloodv2">AB+<img src="img/icon.png" alt="" /></a></div>
                    </span>
                    <span className="patient">
                        <h5>3</h5>
                        <h3 className="azvan">Azvan Sait</h3>
                        <h4 className="n-3">984039204923<div className="indication"></div></h4>
                        <div className="report"><a href="" className="bloodv2">AB+<img src="img/icon.png" alt="" /></a></div>
                    </span>
                    <span className="patient">
                        <h5>4</h5>
                        <h3 className="d5">D5</h3>
                        <h4 className="n-4">984039204923 <div className="indication"></div></h4>
                        <div className="report"><a href="" className="bloodv2">AB+<img src="img/icon.png" alt="" /></a></div>
                    </span>
                    <span className="patient">
                        <h5>5</h5>
                        <h3 className="nihaal">Nihaal</h3>
                        <h4 className="n-5">984039204923 <div className="indication"></div></h4>
                        <div className="report"><a href="" className="bloodv2">AB+<img src="img/icon.png" alt="" /></a></div>
                    </span>
                </div>
                <a href="#" className="lastarrow">
                    <div className="lastarrow" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        View more 
                        <img style={{ position: 'relative', top: '5.1px' }} src="right-arrow-svgrepo-com (1).png" alt="icon" width="20" height="20" />
                    </div>
                </a>
            </div>
            <div className="lastbox">
                <h4 className="lastdate">
                    13/02/24
                </h4>
                <h4 className="lastf">
                    Filed a request of 20
                </h4>
                <h4 className="lastdonner">
                    donors.
                </h4>
                <h4 className="lastdown">
                    17 Donors Accepted.
                    <img style={{ position: 'relative', top: '3px' }} src="down.png" alt="icon" width="20" height="20" />
                </h4>
                <h4 className="lastrequst">
                    Request id:#04902930
                </h4>
                <h4 className="lastRequestExpired">
                    Request Expired 
                    <img style={{ position: 'relative', top: '2px' }} src="info-circle-svgrepo-com.png" alt="icon" width="18" height="18" />
                </h4>
            </div>
        </div>
    );
}
