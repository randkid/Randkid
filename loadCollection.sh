function Load {
    svn export https://github.com/randkid/${1}/trunk
    mv ./trunk ./${1}
}

rm -r Collection
mkdir Collection
cd Collection

Load school
Load residence
Load surname
Load size
Load name
Load birthdate
Load gender
Load bloodType