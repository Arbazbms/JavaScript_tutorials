

/*
However, this callback strategy does not scale well when the complexity grows significantly.

Nesting many asynchronous functions inside callbacks is known as the pyramid of doom or the callback hell:
*/


function download(url, callback) {
    setTimeout(() => {
      console.log(`Downloading ${url} ...`);
      callback(url);
    }, 1000);
  }
  
  const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
  const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
  const url3 = 'https://www.javascripttutorial.net/pic3.jpg';
  const url4 = 'https://www.javascripttutorial.net/pic4.jpg';
  const url5 = 'https://www.javascripttutorial.net/pic5.jpg';
  const url6 = 'https://www.javascripttutorial.net/pic6.jpg';
  const url7 = 'https://www.javascripttutorial.net/pic7.jpg';
  
  
  download(url1, function (url) {
    console.log(`Processing ${url}`);
    download(url2, function (url) {
      console.log(`Processing ${url}`);
      download(url3, function (url) {
        console.log(`Processing ${url}`);
            download(url4, function(url){
                console.log(`Processing ${url}`);
                download(url5, function(url){
                    console.log(`Processing ${url}`);
                    download(url6, function(url){
                        console.log(`Processing ${url}`);
                        download(url7, function(url){
                            console.log(`Processing ${url}`);
                    });
                });
            });
        });
      });
    });
  });
  