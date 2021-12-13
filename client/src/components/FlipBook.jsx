import '../css/component-css/FlipBook.scss';


const FlipBook = () => {
  return (
    <div className="flipbody">
    <div className="flipbook-div">
        <div class="imgLoader"></div>

<div class="container">

  <h1 class="title">
    Where Writers Who Wander<br />are not lost
  </h1>

{/* <!--   <div class="credit">
    * Images loaded randomly from Picsum.photos
  </div> --> */}

  <div class="book">
    <div class="gap"></div>
    <div class="pages">
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
    </div>
    <div class="flips">
      <div class="flip flip1">
        <div class="flip flip2">
          <div class="flip flip3">
            <div class="flip flip4">
              <div class="flip flip5">
                <div class="flip flip6">
                  <div class="flip flip7"></div>
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