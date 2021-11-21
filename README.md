#include <stdio.h>
#include<string.h>
#include<ctype.h>
 
int main(){
    char a[100];
    int s,i,test,up,up2;
    scanf("%[^\n]",&a);
    scanf("%d",&s);
    for(i=0;i<strlen(a);i++){
        if(isalpha(a[i])){
            up = isupper(a[i]);
            a[i] = a[i] + s;
            up2 = islower(a[i]);
            test = isalpha(a[i]);
            if(test == 0){
                a[i] = a[i] - 26;
            }
            if(up){
                if(up2){
                    a[i] = a[i]-26;
                }
            }
        }
 
        printf("%c",a[i]);
    }
}
