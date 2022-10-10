const odaihyojiDOM = document.querySelector(".odai-hyoji");

const params = window.location.search;
const QNo = new URLSearchParams(params).get("QNo");

console.log(QNo);

const showOdai = async () => {
    try {
        const { data: odai } = await axios.get(`/api/v1/odai/${QNo}`);
        const { name, completed} = odai;
        odaihyojiDOM.textContent = name;
    } catch (err) {
        console.log(err);
    }
};
showOdai();