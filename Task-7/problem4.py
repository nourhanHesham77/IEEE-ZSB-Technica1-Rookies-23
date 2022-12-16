if __name__ == '__main__':
    class Student:
        def __init__(self, name, score):
            self.name = name
            self.score = score
        
        def __str__(self):
            return f'{self.name}'
    
            
    def get_least(all):
        least = float('inf')
        for stud in all:
            if stud.score <= least:
                least = stud.score
        
        return least
        
    all = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        all.append(Student(name=name, score=score))
    
    least = get_least(all)
    all  = [stud for stud in all if stud.score != least]
   
    
    least = get_least(all)
    all  = [stud for stud in all if stud.score == least]
    all.sort(key = lambda x: x.name)
    for stud in all:
        print(stud)