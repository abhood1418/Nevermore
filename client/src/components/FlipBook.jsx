import '../css/component-css/FlipBook.scss';


const FlipBook = () => {
  return (
    <div className="flipbody">
    <div className="flipbook-div">
        <div className="imgLoader"></div>

<div className="container">

  <h1 className="title">
    Where Writers Who Wander<br />are not lost
  </h1>

{/* <!--   <div class="credit">
    * Images loaded randomly from Picsum.photos
  </div> --> */}

  <div className="book2">
    <div className="gap"></div>
    <div className="pages">
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
    </div>
    <div className="flips">
      <div className="flip flip1">
        <div className="flip flip2">
          <div className="flip flip3">
            <div className="flip flip4">
              <div className="flip flip5">
                <div className="flip flip6">
                  <div className="flip flip7"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
  )
}

export default FlipBook;