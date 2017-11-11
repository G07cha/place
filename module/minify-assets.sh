JAVA=$(whereis java)
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ -z "$JAVA" ]
then
      echo "Can't find Java"
fi

cd $DIR && java -jar bin/closure-compiler.jar --js_output_file=static/js/main.min.js 'static/js/*.js'
