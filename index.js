
function CardHorizontal()  {
    let opacity=0;
    function clickedBtn(){
        opacity=1
        let icons=document.getElementById("icons").style.opacity=opacity   
    }
    return (
  <div>
    <div className="card" style={{width: "800px"}}>
    <div className="row g-0">
      <div className="col">
      <img src="drawers.jpg" className="img-fluid rounded-start"/>
      </div>
      <div className="col">
        <div className="card-body">
          <p className="card-title big-text">Shift the overall look and feel by adding these wonderful touches to furniture in your home</p>
          <p className="card-text small-text"> Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          <p className="card-text">
            <div className="row g-0">
            <img src="avatar-michelle.jpg" className="img rounded-circle"/>
            <div className="col"><span className="big-text">Michelle Appleton</span><br/><span className="small-text">28 Jun 2020</span> </div>
            <div className="col-2"><button onClick={clickedBtn} className="btn rounded-circle"><img src="icon-share.svg"/>
            </button> </div></div></p>
            <div id="icons" className="card icons" style={{opacity:0}}>
              <div className="row">
                <div className="col big-text">SHARE</div>
                <div className="col"><img src="icon-twitter.svg" className="img rounded-circle"/></div>
                <div className="col"><img src="icon-pinterest.svg" className="img rounded-circle"/></div>
                <div className="col"><img src="icon-facebook.svg" className="img rounded-circle"/></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
)}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(CardHorizontal())