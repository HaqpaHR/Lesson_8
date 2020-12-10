const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
  };

  const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
  };
  
  const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
  };

  const punishments = {
    Late: 'late',
    Miss: 'miss_job',
    Lost: 'lost',
  };

  const taxes = {
    [punishments.Late]: 100,
    [punishments.Miss]: 200,
    [punishments.Lost]: 300,
  };
  
  function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.completedTasks = 0;
  
    this.addTask = () => {
      this.tasks++;
    };

    this.fine = (fineString) => {
      this.reducedsalary = this.salary - taxes[fineString];
    };
   
   
    /**
     * This method...
     */
    this.finishTask = () => {
      if (this.tasks > 0) {
        this.completedTasks++;
        this.tasks--;
        this.salary +=
          (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      }
    };

    this.upgrade = () => {
      if (this.grade == grades.Senior){
      return;
      }
      if(this.completedTasks >= 3 && this.completedTasks <= 6) {
          this.grade = grades.Middle;
      } else if(this.completedTasks > 6) {
        this.grade = grades.Senior;
      } else { 
        console.log('not enough complete tasks');
      };
    };

   
  }
  
  const user = new User('John', 'C++', grades.Junior);
  const user1 = new User('Vasya', 'Rust', grades.Senior);
  const user2 = new User('Nifertiti', 'Bu', grades.Middle);
  const user4 = new User('asd','C++', grades.Junior);
  

  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();

  user1.addTask();
  user1.addTask();
  user1.addTask();
  user1.addTask();
  user1.addTask();
  user1.addTask();
  user1.addTask();
  user1.addTask();
  user1.addTask();

  user1.finishTask();
  user1.finishTask();
  user1.finishTask();
  user1.finishTask();
  user1.finishTask();
  user1.finishTask();
  user1.finishTask();
  user1.finishTask();
  user.upgrade();
  user1.upgrade();
  
  user.fine(punishments.Late);
  user1.fine(punishments.Lost);

  console.log(user);
  console.log(user1);


  // const punishments = {
  //   Late: 'late',
  //   Miss: 'miss_job',
  //   Lost: 'lost',
  // };

  // const taxes = {
  //   [punishments.Late]: 100,
  //   [punishments.Miss]: 200,
  //   [punishments.Lost]: 300,
  // };

  // this.fine = (fineString) => {
  //   return taxes[fineString];
  // };