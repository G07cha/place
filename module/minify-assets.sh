JAVA=$(whereis java)
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
OUTPUT=static/js/main.min.js

if [ -z "$JAVA" ]
then
      echo "Can't find Java"
fi

cd $DIR && \
  rm $OUTPUT && \
  $JAVA -jar bin/closure-compiler.jar --js_output_file=$OUTPUT 'static/js/*.js'
