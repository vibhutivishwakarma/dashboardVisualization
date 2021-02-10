function updateData()
{
    fetch("/jsondata.json").then(response => response.json()).then(rsp => {
        // console.log(rsp);
        let sector = [];
        let intensity = [];
        
        let myObj = {};
        
        rsp.forEach(element => {
             if(myObj[element.sector]){
                 myObj[element.sector] = myObj[element.sector] + Number(element.intensity)
                 }
            else {
                myObj[element.sector] = Number(element.intensity)
            }

           
        });
    
        
        for(let key in myObj){
            sector.push(key);
            intensity.push(myObj[key])
        }
        
        
        
        let newChart = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(newChart, {
            type: 'radar',
            data : {
                labels : sector ,
                datasets : [
                    {
                    label : 'intensity',
                    data : intensity,
                    backgroundColor: 'rgb(255, 99, 132)'
                     }]
            }
        })
        
    })
}

updateData();