describe('Pengujian Halaman Banner Admin', () => {
    beforeEach(() => {
        // Login terlebih dahulu
        cy.visit('/admin/login');
        cy.get('input[name=email]').type('admin@gmail.com');
        cy.get('input[name=password]').type('1111');
        cy.get('button[type=submit]').click();

        // Pastikan login berhasil & diarahkan ke dashboard
        cy.url().should('include', '/admin');
    });

    it('Menampilkan daftar banner', () => {
        cy.visit('/admin/banner');
        cy.get('h6').contains('Daftar Banner').should('be.visible');
        cy.get('table#banner-dataTable').should('exist');
    });

    it('Menambahkan banner dengan data valid', () => {
        cy.visit('/admin/banner');
        cy.contains('Tambah Banner').click();

        // Isi form tambah banner
        cy.get('input[name=title]').type('Diskon Akhir Tahun');
        cy.get('input[name=slug]').type('diskon-akhir-tahun');
        cy.get('input[type=file]').selectFile('cypress/fixtures/sample-banner.jpg');
        cy.get('select[name=status]').select('active');
        cy.get('button[type=submit]').click();

        cy.contains('Banner berhasil ditambahkan').should('exist');
    });

    it('Gagal menambahkan banner jika data kosong', () => {
        cy.visit('/admin/banner/create');
        cy.get('button[type=submit]').click();

        cy.contains('field wajib diisi').should('exist');
    });

    it('Edit banner yang sudah ada', () => {
        cy.visit('/admin/banner');
        cy.get('a[title=Ubah]').first().click();

        cy.get('input[name=title]').clear().type('Banner Diperbarui');
        cy.get('button[type=submit]').click();

        cy.contains('Banner berhasil diperbarui').should('exist');
    });

    it('Menghapus banner dengan konfirmasi', () => {
        cy.visit('/admin/banner');

        // Gunakan stub agar swal otomatis memilih "OK"
        cy.window().then((win) => {
            cy.stub(win, 'confirm').returns(true);
        });

        cy.get('form button[title=Delete]').first().click();

        // Pastikan ada feedback atau halaman refresh
        cy.contains('Banner berhasil dihapus').should('exist');
    });
});
