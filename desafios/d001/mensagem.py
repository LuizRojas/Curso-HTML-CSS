def msg(tam, passo=1):
    if (passo >= 1):
        for e in range(0, tam, passo):
            print(f"{'*' * (e+1)} {chr(48+e+1)}")

    if (passo < 0):
        for i in range(tam, 0, passo):
            print(f"{'*' * (i)} {chr(48+i)}")

def main():
    tam = int(input())
    msg(tam, 1)
    print('')
    msg(tam, -1)

if __name__ == "__main__":
    main()
