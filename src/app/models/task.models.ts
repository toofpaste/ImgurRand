export class Task{
  public done: boolean = false;

  constructor(public description: string){}
  genUrl(){
    var ic = 0;
    var hold = [];
    while(ic <= 100){
    ic++;
    if(ic >= 100){
      this.done = true;
    }
    var i = ['A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var link1 = i[Math.floor(Math.random() * i.length)];
    var link2 = i[Math.floor(Math.random() * i.length)];
    var link3 = i[Math.floor(Math.random() * i.length)];
    var link4 = i[Math.floor(Math.random() * i.length)];
    var link5 = i[Math.floor(Math.random() * i.length)];
    var link = "https://i.imgur.com/" + link1 + link2 + link3 + link4 + link5 + ".jpg";
    this.description = link;
    hold.push(link);
    //this.testImage();
  }
    return hold;
  }
}
