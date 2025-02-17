var name1  = new Buffer.alloc(50)
var vowels = new Buffer.alloc(10)
var vowel_extract = new Buffer.alloc(20)
var w = 0;
vowels.write("aeiouAEIOU")

//Name to insert
name1.write("gowthaman, velur, livewire tutor")

for(k of name1.toString())
{
    for(j of vowels.toString())
    {
        if(k==j){
            vowel_extract.write(k,w);
            w++;
        }     
    }
}

//output
for(i of vowel_extract.toString()){
    console.log(i+ " ")
}
console.log(vowel_extract.toString()+"  ")