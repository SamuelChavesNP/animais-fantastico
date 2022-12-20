export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const dadosResponse = await fetch(url);
      const bitcoinBRL = await dadosResponse.json();
      const btcSpan = document.querySelector('.btc-preco');

      btcSpan.innerHTML = (1000 / bitcoinBRL.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
