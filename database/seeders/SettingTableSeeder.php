<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array(
            'description' => "Kami berkomitmen untuk memberikan pelayanan terbaik kepada pelanggan. Semua produk yang kami tawarkan telah melalui proses kurasi yang ketat untuk memastikan kualitas. Kami percaya bahwa belanja seharusnya menjadi pengalaman yang mudah, menyenangkan, dan dapat diandalkan. Kepuasan Anda adalah prioritas utama kami.",

            'short_des' => "Temukan berbagai produk pilihan dengan kualitas terbaik dan harga terjangkau. Belanja kini jadi lebih mudah dan aman bersama kami.",

            'photo' => "image.jpg",
            'logo' => "logo.jpg",
            'address' => "Jl. A. Yani Km. 33,5, Loktabat Selatan, Banjarbaru, Kalimantan Selatan",
            'email' => "via@gmail.com",
            'phone' => "+62 831-3729-0566",
        );
        DB::table('settings')->insert($data);
    }
}
