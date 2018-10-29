


var scoreCompanySize = 0;
var scoreCompanyComplexity = 0;
var scoreCompanyPreference = 0;
var scoreLiberalOrConservative = 0;
var scoreCandy = 0;


$(document).ready(function(){
  $("form.quiz").submit(function(event){

    var companySize = $("input:radio[name=companySize]:checked").val();

    if(companySize === 'small' ){
      scoreCompanySize += 1;
    }
    else if (companySize === 'large'){
      scoreCompanySize += 2;
    }

    var companyComplexity = $("input:radio[name=companyComplexity]:checked").val();

    if(companyComplexity === 'simple'){
      scoreCompanyComplexity += 1;
    }

    else if (companyComplexity === 'complex'){
      scoreCompanyComplexity += 2;
    }

    var companyPreference = $("input:radio[name=companyPreference]:checked").val();

    if(companyPreference === 'airbnb'){
      scoreCompanyPreference += 1;
    }

    else if (companyPreference === 'microsoft'){
      scoreCompanyPreference += 2;
    }

    var liberalOrConservative = $("input:radio[name=liberalOrConservative]:checked").val();

    if(liberalOrConservative === 'liberal'){
      scoreLiberalOrConservative += 1;
    }

    else if (liberalOrConservative === 'conservative'){
      scoreLiberalOrConservative += 2;
    }

    var candy = $("input:radio[name=scoreCandy]:checked").val();

    if(candy === 'chocolate'){
      scoreCandy += 1;
    }

    else if (candy === 'skittles'){
      scoreCandy += 2;
    }

    var total = (scoreCompanySize + scoreCompanyComplexity + scoreCompanyPreference + scoreLiberalOrConservative + scoreCandy);

    if (total === 5){
      $('#rubyOnRails').show();
      $('#cSharp').hide();
      $('#java').hide();
    }

    else if (total > 5 <= 8){
      $('#cSharp').show();
      $('#rubyOnRails').hide();
      $('#java').hide();
    }

    else if (total > 8){
      $('#java').show();
      $('#cSharp').hide();
      $('#rubyOnRails').hide();
    }

    event.preventDefault();

    });

    $("form#reset").click(function(event) {
    total = 0;

    event.preventDefault();
    });
  });
});
