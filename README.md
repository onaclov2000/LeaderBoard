# LeaderBoard
Simple Leaderboard for my KBAI class, but can work across projects.

Want to use this for your project?

Edit the Firebase URL to your URL.

For Python :)
Add the following lines

    from firebase import firebase
    firebase = firebase.FirebaseApplication('https://<your url>.firebaseio.com/', None)
    import time
  
Where you want to get points for a task post it with these lines:

      new_user = 'tbailey' # Replace with a string as your name, I.E. 'tbailey' in my case (with the quotes)
                if new_user:
                   ts = time.time()
                   temp = firebase.post('<sub node>/' + <task> + '/scores', {'user' : new_user, 'value' : <Score you wish to capture>, "time" : ts*1000})
