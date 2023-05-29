function timmyAndSarah(flower1,flower2){
        return flower1%2==0 && flower2%2!==0? 'They are in love':flower1%2!==0 && flower2%2==0? 'They are in love' :'They are not in love'
}
console.log(timmyAndSarah(2,7)) //odd , even=yes
console.log(timmyAndSarah(7,7)) //two odd = no
console.log(timmyAndSarah(8,8)) //two even = no


