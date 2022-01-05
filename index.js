const fs = require('fs');

//DOSYA OLUŞTURMAK VE VERİ EKLEMEK(CREATE) 
//   fs.writeFile('employees.json', '{"name": "Employee 1 Name" , "salary":1000}', 'utf-8', (err) => {
//       if (err) console.log(err);
//       console.log('JSON dosyanız oluşturuldu ve veri eklendi.');
//   });


// DOSYAYI OKUMAK (READ)

//  fs.readFile('employees.json','utf-8',(err,data)=>{
//      if (err) console.log(err);
//      console.log(data);
//      console.log('Dosyanız başarıyla okundu.');
//  });

//DOSYADAKI VERİYİ GÜNCELLEMEK
//   fs.appendFile('employees.json', '\n{"name": "Employee 1 Name" , "salary":4000}', 'utf8', (err)=>{
//      if (err) console.log(err);
//       console.log('JSON dosyanız güncellendi.');
//   });

//DOSYAYI SİLMEK

//  fs.unlink('employees.json',(err)=>{
//            if (err) console.log(err);
//            console.log('Dosyanız başarıyla silindi.');
//        });

