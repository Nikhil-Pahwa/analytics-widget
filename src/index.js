
document.body.addEventListener('click', (event) => {
  let element = event.target;
  if(element.getAttribute('data-track-id')) {
  
    let trackingInfo = {
      customerInfo: 123,
      attr: element.getAttribute('data-track-id'),
      htmlValue: element.innerText
    };

    console.log('tracking info.... ', trackingInfo);

    // Make api call to publish tracking data
    fetch('http://12321.com', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trackingInfo) // body data type must match "Content-Type" header
    }).then((success) => {
      console.log(success);
    }).catch((error) => {
      console.log('May be REST API is not implemented');
    })
  }
});
