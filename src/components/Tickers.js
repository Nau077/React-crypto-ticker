import React, { Component } from 'react';
import axios from 'axios';
import CloseClick from './CloseClick';
import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

class Tickers extends Component {
    fetchCryptocurrencyData(){
        // axios.defaults.headers.common['Authorization'] = "1438519b-6ab6-470f-86bd-6c95a61d0828";
     axios.get("https://api.coinmarketcap.com/v2/ticker/?limit=10")
        .then(response => {
            var wanted = ["bitcoin", "ethereum","litecoin","eos","xrp", "tron"];
            // var result = response.data.filter(currency => wanted.includes(currency.id));
            var wantedArr = this.normalizeData(wanted, response.data.data);
 
            this.setState({data: wantedArr});
 
        })

    }
    
    normalizeData(wanted, data)  {
        return Object.keys(data).reduce((acc, key) => {
            const current = data[key];
            if (wanted.includes(current.name.toLowerCase())) {
                acc.push({
                    id: current.id,
                    name: current.name,
                    symbol: current.symbol,
                    price_usd: current.quotes.USD.price,
                    percent_change_1h: current.quotes.USD.percent_change_1h,
                    percent_change_24h: current.quotes.USD.percent_change_24h,
                    percent_change_7d: current.quotes.USD.percent_change_7d,
                })
            }
            return acc;
        }, [])
    }
            //  &&*()*()*()
         
    
    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 1 *15000);
        
    }
    state = {
        data: [ 
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "ethereum",
                name: "Ethereum",
                symbol: "ETH",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "litecoin",
                name: "Litecoin",
                symbol: "LTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "xrp",
                name: "XRP",
                symbol: "XRP",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
            {
                id: "eos",
                name: "EOS",
                symbol: "EOS",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },

            {
                id: "tron",
                name: "TRON",
                symbol: "TRX",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },

            {
                id: "tron",
                name: "tron",
                symbol: "TRX",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            }


        ]
    }

 

    render() {
        var tickers = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id}/>
        );
     
        return (
            <div className="tickers-containers">
            <ul className="tickers">{tickers} </ul>
            <p className = {"info"}>Information takes 10 seconds to fetch</p>


        <div className={"overlay"}>
            <div className={"confirm-modal"}>
            <h3 className={"confirm-title"}>Do you expect innovation?</h3>
            <img src={require("../nXzIRGpe5eg.jpg")}  className={"gorbach"}/>
                
                <div className={"confirm-buttons"}>                  
                    <CloseClick/>            
               </div>
            </div>
        </div>     
        </div>
        );
    }

}

export default Tickers;