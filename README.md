### Quick summary:
It seems that the linked JS files are transpiled (by Babel) before they are concatenated. This kind of processing may introduce errors due to Babel locally/partially transforming code snippets.

### Expected behaviour:
Do JS transpiling only after all linked files are concatenated.

### In the repo:
* 'test/app1.js' is transpiled from 'src/_app1.js', which is the entry (master file) of 'foo.js', 'bar1.js' , and 'bar2.js'.
* 'test/app2.js' is transpiled from 'src/_app2.js'.

The source codes without transpiling of '_app1.js' (concatenated) and '_app2.js' should be identical. After transpiling however, there is at least one critical difference between 'test/app1.js' and 'test/app2.js'  as follows.

Notice the re-declared variable `_templateObject` in 'app1.js', which is introduced by some ES2015 transformations via Babel. (The re-declaration is an error.) Meanwhile in 'app2.js', the seperate `_templateObject` and `_templateObject2` variables are the expected transformation.
