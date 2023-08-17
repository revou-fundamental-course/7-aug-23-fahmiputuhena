// Fungsi untuk menghitung luas segitiga
function menghitungLuas() {
// Mendapatkan nilai alas dan tinggi dari input
const alas = parseFloat(document.getElementById('alas').value);
const tinggi = parseFloat(document.getElementById('tinggi').value);

// Memeriksa apakah input valid
if (isNaN(alas) || isNaN(tinggi)) {
    alert("Masukkan nilai yang valid untuk alas dan tinggi.");
} else {
// Menghitung luas dan menampilkan hasil 
const luas = 0.5 * alas * tinggi;
document.getElementById('luasHasil').textContent = luas.toFixed(2);
}
}

// Fungsi untuk menghitung keliling segitiga
function menghitungKeliling() {
// Mendapatkan nilai dari sisi-sisi segitiga
const sisi1 = parseFloat(document.getElementById('sisi1').value);
const sisi2 = parseFloat(document.getElementById('sisi2').value);
const sisi3 = parseFloat(document.getElementById('sisi3').value);

// Memeriksa apakah input valid
if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    alert("Masukkan nilai yang valid untuk semua sisi.");
} else {
// Menghitung keliling dan menampilkan hasil
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('kelilingHasil').textContent = keliling.toFixed(2);
}
}

// Fungsi untuk mereset formulir luas segitiga
function resetLuasForm() {
document.getElementById('alas').value = '';
document.getElementById('tinggi').value = '';
document.getElementById('luasHasil').textContent = '-';
}

// Fungsi untuk mereset formulir keliling segitiga
function resetKelilingForm() {
document.getElementById('sisi1').value = '';
document.getElementById('sisi2').value = '';
document.getElementById('sisi3').value = '';
document.getElementById('kelilingHasil').textContent = '-';
}
