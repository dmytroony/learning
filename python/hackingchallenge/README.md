# Hack passwords

## How to run:
1) open hack.py and to write which generators login, password and method of a request need to use;
2) give this arguments to the Hack class
3) run the `python3 hack.py`

## API requesters:
to add requester - create a file in the requesters package and to create there a function 
                   which receives two parameters(login, password) and return a boolean variable

## API generators:
to add generator - create a file in the generators package and to creathe there a Class: 
```
class Generator:
    
    def next(self):
        return str or None
```

