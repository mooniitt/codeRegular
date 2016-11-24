var program = require('commander')
var fs = require('fs')
program
	//.allowUnknownOption()
	.option('-r, --regular <filename>','regular the js file')
	.option('-d, --date','display current date')
	.parse(process.argv)
var filename = program.regular
fs.writeFile(filename,content,function(err,data){
	if(err){
		console.log('write error')
	}
	var re = //\/g
	if(re.test(filename)){
		var arr = filename.split('\\')
		var str = arr[arr.length - 1]
		console.log(str)
	}
	console.log('write successed')
	console.log(re)
})
if(filename){
	console.log(filename+' : start to parse...')
}

var dt = new Date()
if(program.date){
	console.log(dt.getFullYear()
				+ '-'
				+ (dt.getMonth() + 1)
				+ '-'
				+ dt.getDate())
}

var content = ''
fs.readFile(filename,function(err,data){
	if(err){
		return console.log('err')
	}
	var re = /;/g
	var text = data.toString()
	console.log(re.test(text))
	content = text.replace(re,'\r\n')
	console.log(content)
})

