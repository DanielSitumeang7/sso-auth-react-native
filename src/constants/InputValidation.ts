
export function Validate(input: string, type: string) {

    switch (type) {
        case 'email':
            return ValidateEmail(input);
        case 'password':
            return ValidatePassword(input);
        case 'phone':
            return ValidatePhone(input);
        case 'name':
            return ValidateName(input);
        case 'date':
            return ValidateDate(input);
        case 'time':
            return ValidateTime(input);
        case 'number':
            return ValidateNumber(input);
        case 'empty':
            return ValidateEmpty(input);
        default:
            return ValidateEmpty(input);
    }
}

export function ValidateEmail(input: string) {

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input) === false) {
        return "Email tidak valid";
    }
}

export function ValidatePassword(input: string) {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(input) === false) {
        return "Password harus terdiri dari huruf besar, huruf kecil, dan angka";
    }
}

export function ValidatePhone(input: string) {
    if (/^\d{10}$/.test(input) === false) {
        return "Nomor telepon harus terdiri dari 10 digit";
    }
}

export function ValidateName(input: string) {
    if (/^[a-zA-Z ]{2,}$/.test(input) === false) {
        return "Nama harus terdiri dari huruf dan minimal 2 karakter";
    }
}

export function ValidateDate(input: string) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(input) === false) {
        return "Tanggal tidak valid";
    }
}

export function ValidateTime(input: string) {
    if (/^\d{2}:\d{2}$/.test(input) === false) {
        return "Waktu tidak valid";
    }
}

export function ValidateNumber(input: string) {
    if (/^\d+$/.test(input) === false) {
        return "Harus berupa angka";
    }
}

export function ValidateEmpty(input: string) {
    try {
        if (input.length === 0) {
            return "Tidak boleh kosong";
        }
    }
    catch (e) {
        return "Tidak boleh kosong";
    }
}

export function ValidateSame(input1: string, input2: string, keyword: string) {
    if (input1 !== input2) {
        return `${keyword} Harus sama`;
    }
}

export function ValidateLength(input: string, length: number) {
    if (input.length < length) {
        return `Minimal ${length} karakter`;
    }
}

export function PesanErrorValidasi(input: Array<any>) {

    let pesan = '';
    try {
        input.forEach((item: string, index) => {
            if (item !== undefined) {
                if (input.length > 1) {
                    if (index < input.length - 1) {
                        pesan += `${item}; `;
                    } else if (index === input.length - 1) {
                        pesan += `dan ${item}`;
                    } else {
                        pesan += `${item}`;
                    }
                } else {
                    pesan += `${item}`;
                }
            }
        }
        );

        return pesan;
    }
    catch (e) {
        return '';
    }
}

