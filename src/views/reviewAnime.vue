<template>
<div class="write-review text-start">
    <h1>WRITE YOUR OPINION ABOUT THIS ANIME HERE</h1>
     <div class="content">  
        <div class="row box-content">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6 pt-2">
                <h2>Anime Info</h2>
                <a href="">MORE INFO</a>
                
              </div>
              <div class="col-md-6 pt-2">
                <p>Title : NARUTO</p>
                <p>Rating : R-13</p>
                <p>Episode : 100</p>
              </div>
              <div class="row">
                  <form action="">
                      <div class="row">
                            <div class="col-6">
                              <label class="form-check-label">Rate the anime : </label><br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option1">
                                    <label class="form-check-label" >1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >3</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >4</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >5</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >6</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >7</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >8</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >9</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
                                    <label class="form-check-label" >10</label>
                                </div>
                          </div>
                          <div class="col-4">
                                 <label class="form-check-label" for="inlineRadio1">This anime Recomended? </label><br>
                                 <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
                                <label class="btn btn-outline-success" for="success-outlined">Recomended</label>

                                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
                                <label class="btn btn-outline-danger" for="danger-outlined">Not Recomended</label>
                        </div>
                      </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Your review : </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    
                  </form>
                  <button class="btn btn-primary" type="submit">Post Review</button>
               
                <!-- <div class="absolute"><button>Recomended</button></div> -->
              </div>
            </div>
          </div>

          <div class="col-4 text-end" style="padding-left: 0px">
            <img src="../assets/naruto.jpg" alt="" class="image-fluid" />
          </div>
        </div>
        
      </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
.write-review{
    margin-top: 150px;
}
.write-review a {
    color: aqua;
    text-decoration: none;
}
.write-review h1{
  color: rgb(255, 255, 255);
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}

</style>