const odaiDOM = document.querySelector(".odai");
const formDOM = document.querySelector(".odai-form");
const odaiInputDOM = document.querySelector(".odai-input");
const QNoInputDOM = document.querySelector(".QNo-input");

// /api/v1/odaiからお題を読み込む
const showOdai = async () => {
    try {
        //自作のAPIを叩く
        const { data: odai } = await axios.get("/api/v1/odai");

        //お題がひとつもないとき
        if(odai.length < 1){
            odaiDOM.innerHTML = `<h5>お題が登録されていません</h5>`;
            return;
        }
        
        //お題を出力
        const allOdai = odai.slice(0).reverse().map((odai) => {
            const { completed, _id, name, QNo} = odai;
            return `<div class="single-odai">
            <h6>${QNo}</h6>
            <h5><span></span>${name}</h5>
            <a href="hyoji.html?QNo=${QNo}">表示</a>
            <hr>
    
        </div>`;
        })
        .join("");
        odaiDOM.innerHTML = allOdai;
    } catch(err) {
        console.log(err);
    }
};
showOdai();

//お題を新規作成する
formDOM.addEventListener("submit", async (event) => {
     event.preventDefault();
     const name = odaiInputDOM.value;
     const QNo = QNoInputDOM.value;
     try {
        await axios.post("/api/v1/odai", {name: name, QNo: QNo});
        showOdai();
        odaiInputDOM.value = "";
        QNoInputDOM.value = "";
     } catch (err) {
        console.log(err);
     }
});
