const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.checkLength = function() {
  let bodylength = this.body.length;
}

Entry.prototype.seperator = function() {
  this.body.split('');
  for (var i = 0; i < word.length; ++i) {
    if (vowels.includes(word[i])) {
      
}
