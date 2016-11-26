var program = require('commander')
var fs = require('fs')
program
	//.allowUnknownOption()
	.option('-r, --regular <filename>','regular the js file')
	.parse(process.argv)
var filename = program.regular
if(filename){
	console.log(filename+' : start to parse...')
}
var content = ''
fs.readFile(filename,function(err,data){
	if(err){
		return console.log('err')
	}
	console.log('successed')
	var re = /(;\r\n)|(;\n)/g
	var text = data.toString()
	console.log(re.test(text))
	content = text.replace(re,'\n')
	console.log(content)
	fs.writeFile(filename,content,function(err,data){
		if(err){
			console.log('write error')
		}
	})
})


